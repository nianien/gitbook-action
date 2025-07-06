var format = require('util').format;

module.exports = {
    blocks: {
        hint: {
            process: function (block) {
                var style = block.kwargs.style || 'info';
                var title = block.kwargs.title || style.charAt(0).toUpperCase() + style.slice(1);

                // 直接使用原始 Markdown 内容，避免 renderBlock
                return format(
                    '<div class="hint %s"><p class="hint-title">%s</p>\n%s\n</div>',
                    style,
                    title,
                    block.body  // ⬅️ 注意直接使用 block.body
                );
            }
        }
    }
};