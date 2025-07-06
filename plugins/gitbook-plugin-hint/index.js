var format = require('util').format;

module.exports = {
    blocks: {
        hint: {
            process: function (block) {
                var style = block.kwargs.style || 'info';
                var title = block.kwargs.title || style.charAt(0).toUpperCase() + style.slice(1);
                var content = (this.renderBlock && typeof this.renderBlock === 'function')
                    ? this.renderBlock(block.body)
                    : block.body;
                return format(
                    '<div class="hint %s"><p class="hint-title">%s</p>\n%s\n</div>',
                    style,
                    title,
                    content
                );
            }
        }
    }
};