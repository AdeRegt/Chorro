#! /bin/bash

if [ -z "$1" ]; then
  echo "Run this script like this $0 <name>"
  echo "where name is the name of the migration you're making"
  exit 1
fi

if [[ ! -d "Chorro-backend" ]]; then
  echo "Run this script from project root folder"
fi

cd Chorro-backend || exit 1

source $HOME/.virtualenvs/Chorro-backendback/bin/activate

flask migration create "$1"

