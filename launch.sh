#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

if ! command -v bundle >/dev/null 2>&1; then
  echo "Bundler is required. Install Ruby and Bundler first." >&2
  exit 1
fi

bundle exec jekyll serve --host 0.0.0.0 --port 4000
