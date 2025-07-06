module.exports = {
    // 钩子：页面渲染前注入资源
    hooks: {
        init: function() {
            console.log('Hint plugin initialized!');
        },
        // 注入 CSS 到 HTML
        "page:before": function(page) {
            const cssPath = this.resolveAsset('assets/hint.css');
            page.content += `<link rel="stylesheet" href="${cssPath}">`;
            return page;
        },
        // 解析 Markdown 中的自定义语法
        "markdown": function(md) {
            md.use(function(remark) {
                // 示例：替换 {% hint %} 语法为 HTML
                remark.core.processor().use(function(ast) {
                    ast.children = ast.children.map(node => {
                        if (node.type === 'code' && node.value.includes('{% hint')) {
                            return {
                                type: 'html',
                                value: parseHintSyntax(node.value) // 自定义解析函数
                            };
                        }
                        return node;
                    });
                });
            });
        }
    },
    // 解析静态资源路径
    resolveAsset: function(path) {
        return this.book.resolve(path);
    }
};

// 示例解析函数
function parseHintSyntax(text) {
    const style = text.match(/style="(.*?)"/)[1];
    const content = text.replace(/{%[^%]*%}/g, '');
    return `<div class="hint hint-${style}">${content}</div>`;
}