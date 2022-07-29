const Configuration = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
      'type-enum': [2, 'always', ['Feat', 'Design', 'Fix', 'Style', 'Refactor', "Comment", "Doc", "Test", "Chore", "Rename", "Remove"]],
      'type-case': [2, 'always', 'pascal-case'],
      'subject-case': [
        0, // disabled. 나한테 영어 커밋 내용 형식이 대문자던 소문자던 무슨 상관이겠어!
        'never',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
      ],
      'scope-enum': [2, 'always', ['commitlint', 'version', 'release']]
    },
    /*
     * Custom URL to show upon failure
     */
    helpUrl:
      'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',

  };

  // 설명서
  // https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
  

  /*
    Extend 하고 있는 설정
    @commitlint/config-conventional
  */
  ref = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
    },
};

module.exports = Configuration;