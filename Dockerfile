# 编译 typescript
FROM hub.c.163.com/library/node:latest as builder

WORKDIR /opt/application/

COPY .  .

USER root

RUN npm install --registry=https://registry.npmmirror.com

RUN npm run build

# 生产环境镜像，不安装 devDependencies， 减少部署镜像大小
FROM hub.c.163.com/library/node:latest

WORKDIR /opt/application/

COPY --from=builder /opt/application/dist ./dist

COPY package.json ./

COPY run.sh ./

USER root

RUN npm install --production --registry=https://registry.npmmirror.com

RUN chmod -R 777 /opt/application/run.sh

EXPOSE 8000

CMD /opt/application/run.sh
