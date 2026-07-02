import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { ApifyClient } from 'apify-client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const token = process.env.APIFY_TOKEN;
if (!token) {
    throw new Error('Set APIFY_TOKEN before running this example.');
}

const client = new ApifyClient({ token });

const jobs = [
    {
        actorId: 'changeable_peddler/oss-supply-chain-risk-report',
        inputFile: 'examples/oss-risk-input.json',
    },
    {
        actorId: 'changeable_peddler/sec-red-flag-monitor',
        inputFile: 'examples/sec-red-flags-input.json',
    },
    {
        actorId: 'changeable_peddler/startup-funding-signal-report',
        inputFile: 'examples/startup-funding-input.json',
    },
];

for (const job of jobs) {
    const input = JSON.parse(await readFile(path.join(rootDir, job.inputFile), 'utf8'));
    const run = await client.actor(job.actorId).call(input);
    const { items } = await client.dataset(run.defaultDatasetId).listItems({ clean: true });
    console.log(JSON.stringify({
        actorId: job.actorId,
        runId: run.id,
        rows: items.map((item) => ({
            input: item.input,
            status: item.status,
            score: item.score,
            confidence: item.confidence,
            summary: item.summary,
        })),
    }, null, 2));
}
