#!/bin/bash

echo "=========================================="
echo "      PORTFOLIO TEMPLATE INSTALLER        "
echo "=========================================="
echo "Leave optional fields blank to keep defaults."
echo ""

read -p "Enter your Name [Required]: " NAME
while [ -z "$NAME" ]; do
  read -p "Name is required. Enter your Name: " NAME
done

read -p "Enter your Alias/Handle (e.g. JOKER53): " ALIAS
read -p "Enter your Location (e.g. COIMBATORE · TN): " LOCATION
read -p "Enter your Role/Status (e.g. B.E. CYBER SECURITY): " STATUS
read -p "Enter your GitHub URL: " GITHUB
read -p "Enter your Email: " EMAIL

echo ""
echo "Updating configuration..."

# Export as env variables to safely pass to Node script without quote escaping issues
export PORTFOLIO_NAME="$NAME"
export PORTFOLIO_ALIAS="$ALIAS"
export PORTFOLIO_LOCATION="$LOCATION"
export PORTFOLIO_STATUS="$STATUS"
export PORTFOLIO_GITHUB="$GITHUB"
export PORTFOLIO_EMAIL="$EMAIL"

node -e "
const fs = require('fs');
const path = './src/config.json';
let config = {};

try {
  config = JSON.parse(fs.readFileSync(path, 'utf8'));
} catch (e) {
  console.error('Error reading config.json', e);
  process.exit(1);
}

config.profile.name = process.env.PORTFOLIO_NAME || config.profile.name;
if (process.env.PORTFOLIO_ALIAS) config.profile.alias = process.env.PORTFOLIO_ALIAS;
if (process.env.PORTFOLIO_LOCATION) config.profile.location = process.env.PORTFOLIO_LOCATION;
if (process.env.PORTFOLIO_STATUS) config.profile.status = process.env.PORTFOLIO_STATUS;
if (process.env.PORTFOLIO_GITHUB) config.profile.github = process.env.PORTFOLIO_GITHUB;
if (process.env.PORTFOLIO_EMAIL) config.profile.email = process.env.PORTFOLIO_EMAIL;

fs.writeFileSync(path, JSON.stringify(config, null, 2));
"

echo "Configuration updated successfully in src/config.json!"
echo "Run 'npm run dev' to start the development server."
