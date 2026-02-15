# QA Report Generator

## Task
Analyze the Playwright execution logs provided by the user and cross-reference them with the file @test-case-[FEATURE_NAME].md.

## Output: `doc/qa/reports/report-[FEATURE_NAME]-[DATE].md`
1. **Summary**: % Pass/Fail.
2. **Failures**: List which TCs failed and the technical reason (log).
3. **Action**: Suggest whether the error is in the code (bug) or in the test (broken selector).