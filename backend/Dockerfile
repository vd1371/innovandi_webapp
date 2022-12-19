FROM python:3.8-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /backend

RUN apk add --no-cache --update \
    python3 python3-dev gcc \
    gfortran musl-dev g++ \
    libffi-dev openssl-dev \
    libxml2 libxml2-dev \
    libxslt libxslt-dev \
    libjpeg-turbo-dev zlib-dev

RUN apk add py3-numpy py3-pandas

RUN pip install --upgrade cython
RUN pip install --upgrade pip

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
