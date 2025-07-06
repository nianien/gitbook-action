
FROM zanderzhao/gitbook-action

COPY book.json /book.json
COPY plugins /plugins
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
