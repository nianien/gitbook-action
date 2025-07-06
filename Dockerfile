
FROM zanderzhao/gitbook-action

COPY docker-src/book.json /book.json
COPY docker-src/plugins /plugins
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
