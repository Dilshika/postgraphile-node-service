const http = require("http");
const { postgraphile } = require("postgraphile");
const PostGraphileConnectionFilterPlugin = require("postgraphile-plugin-connection-filter")

http
    .createServer(
        postgraphile("postgres://postgres:post21@127.0.0.1:5432/vehicles", "public", {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
            appendPlugins: [PostGraphileConnectionFilterPlugin],
            graphileBuildOptions: {
                connectionFilterRelations: true,
            },
        })
    )
    .listen("5000");