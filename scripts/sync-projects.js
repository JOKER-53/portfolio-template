import fs from "fs";
import https from "https";

const username = "JOKER-53";
const configPath = "./src/config.json";

const options = {
  hostname: "api.github.com",
  path: `/users/${username}/repos?type=owner&sort=updated&per_page=20`,
  method: "GET",
  headers: {
    "User-Agent": "Node.js Portfolio Auto-Sync",
    Accept: "application/vnd.github.v3+json",
  },
};

// If running in GitHub Actions, use the token to avoid rate limits
if (process.env.GITHUB_TOKEN) {
  options.headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const req = https.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    if (res.statusCode !== 200) {
      console.error(`Failed to fetch repos: ${res.statusCode} - ${data}`);
      process.exit(1);
    }

    const repos = JSON.parse(data);
    if (!Array.isArray(repos)) {
      console.error("Error fetching repos (not an array):", repos);
      process.exit(1);
    }

    // Filter out forks and take the top 6 recently updated
    const filteredRepos = repos.filter((r) => !r.fork).slice(0, 6);

    const flagship = filteredRepos.map((repo, index) => {
      const id = `F-00${index + 1}`;

      const stack = repo.language ? [repo.language] : [];
      if (repo.topics && repo.topics.length > 0) {
        stack.push(...repo.topics.slice(0, 3));
      }
      if (stack.length === 0) stack.push("Various");

      return {
        id: id,
        title: repo.name.toUpperCase().replace(/-/g, " "),
        classification: "PUBLIC · OPEN SOURCE",
        description: repo.description || "No description provided.",
        stack: stack,
        github: repo.html_url,
        live: repo.homepage || "",
      };
    });

    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

    // Check if there are actual changes before writing to avoid empty commits
    const currentFlagshipStr = JSON.stringify(config.flagship);
    const newFlagshipStr = JSON.stringify(flagship);

    if (currentFlagshipStr !== newFlagshipStr) {
      config.flagship = flagship;
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
      console.log("Successfully updated config.json with fresh GitHub repos.");
    } else {
      console.log("No updates needed. The portfolio is already in sync with GitHub.");
    }
  });
});

req.on("error", (error) => {
  console.error("Error fetching from GitHub:", error);
  process.exit(1);
});

req.end();
