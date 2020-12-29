FROM node:12-alpine as base
WORKDIR /base
COPY yarn.lock package.json ./
RUN yarn --frozen-lockfile
COPY . .

FROM base as build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN yarn build

FROM build as production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/yarn.lock ./
COPY --from=build /build/package.json ./
COPY --from=build /build/.next ./.next
RUN yarn add next

EXPOSE 3000

CMD yarn start
