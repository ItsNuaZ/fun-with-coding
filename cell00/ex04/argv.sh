#!/bin/bash
FIRST_ARG=$1
SECOND_ARG=$2
THIRD_ARG=$3

if [[ "$FIRST_ARG" = "" ]]; then
    echo "No arguments supplied"
    exit 1
fi
echo "$FIRST_ARG"

if [[ "$SECOND_ARG" = "" ]]; then
    exit 1
fi
echo "$SECOND_ARG"

if [[ "$THIRD_ARG" == "" ]]; then
    exit 1
fi
echo "$THIRD_ARG"