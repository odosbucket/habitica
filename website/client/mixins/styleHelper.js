export default {
  methods: {
    userLevelStyle (user, style) {
      style = style || '';
      let npc = user && user.backer && user.backer.npc ? user.backer.npc : '';
      let level = user && user.contributor && user.contributor.level ? user.contributor.level : '';
      style += this.userLevelStyleFromLevel(level, npc, style);
      return style;
    },
    userLevelStyleFromLevel (level, npc, style) {
      style = style || '';
      if (npc) style += ' label-npc';
      if (level) style +=   ` label-contributor-${level}`;
      return style;
    },
  },
};
