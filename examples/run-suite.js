import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

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

const args = parseArgs(process.argv.slice(2));
if (args.list) {
    console.log(jobs.map((job) => actorSlug(job.actorId)).join('\n'));
    process.exit(0);
}

const selectedJobs = args.actor
    ? jobs.filter((job) => actorSlug(job.actorId) === args.actor)
    : jobs;
if (selectedJobs.length === 0) {
    throw new Error(`Unknown Actor ${args.actor}. Use --list to see available Actors.`);
}

const token = process.env.APIFY_TOKEN;
if (!token) {
    throw new Error('Set APIFY_TOKEN before running this example.');
}
const { ApifyClient } = await import('apify-client');
const client = new ApifyClient({ token });

for (const job of selectedJobs) {
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

function actorSlug(actorId) {
    return actorId.split('/').at(-1);
}

function parseArgs(argv) {
    const parsed = { actor: null, list: false };
    for (let index = 0; index < argv.length; index += 1) {
        const arg = argv[index];
        if (arg === '--list') parsed.list = true;
        else if (arg === '--actor') parsed.actor = argv[++index];
        else if (arg.startsWith('--actor=')) parsed.actor = arg.split('=')[1];
        else throw new Error(`Unknown argument: ${arg}`);
    }
    return parsed;
}
