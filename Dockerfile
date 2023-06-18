FROM public.ecr.aws/lambda/nodejs:18

COPY *.js package*.json /var/task/

RUN npm ci --production

CMD ["app.handler"]