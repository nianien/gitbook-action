
FROM zanderzhao/gitbook-action

# 内置 gitbook-plugin-hint 插件
RUN mkdir -p /gitbook/plugins/gitbook-plugin-hint && \
    echo "var format = require('util').format;\n\
module.exports = {\n\
  blocks: {\n\
    hint: {\n\
      process: function(block) {\n\
        var style = block.kwargs.style || 'info';\n\
        var title = block.kwargs.title || style.charAt(0).toUpperCase() + style.slice(1);\n\
        return format('<div class=\\\"hint %s\\\"><p class=\\\"hint-title\\\">%s</p>\\n%s\\n</div>', style, title, this.renderBlock(block.body));\n\
      }\n\
    }\n\
  }\n\
};" > /gitbook/plugins/gitbook-plugin-hint/index.js
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
