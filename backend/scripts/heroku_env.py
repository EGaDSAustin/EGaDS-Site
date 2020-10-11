import os
import sys

file= ".env" if len(sys.argv) < 2 else sys.argv[1]

with open(file, "r") as f:
    for line in f.readlines():
        name, *value = line.split('=')
        value = f'"{"=".join(value)}"'
        os.system(f"heroku config:set {name}={value}")