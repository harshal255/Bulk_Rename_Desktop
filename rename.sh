#!/bin/bash

# Get the full path of the script directory
script_full_path=$(dirname "$0")

# Echo the full path to the console
echo $script_full_path

# Execute the Node.js script using the full path
node "$script_full_path/index.js" "$@"
