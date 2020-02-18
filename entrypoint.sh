#!/bin/sh

# TERMを受け取ったら終了する
trap 'echo "SIGTERM ACCEPTED"; exit 0' TERM

# 無限ループ
while :
do sleep 1
done