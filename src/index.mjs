import assert from 'node:assert/strict';
import { createContentPipelineReferencePlan } from '@x12i/graphenix-plan-compiler';
import { validateExecutablePlan } from '@x12i/graphenix-plan-format';

const plan = createContentPipelineReferencePlan({ jobId: 'demo-job' });
assert.equal(validateExecutablePlan(plan).valid, true);
const rejected = validateExecutablePlan({});
assert.equal(rejected.valid, false);
assert(rejected.errors.length > 0);
console.log(rejected.errors);
