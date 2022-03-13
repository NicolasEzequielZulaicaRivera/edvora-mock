echo "⏩ - Forced build"
exit 1;

if ! [[ "$VERCEL_ENV" == "production" ]] ; then
  echo "🛑 - Build cancelled - Not a production env"
  exit 0;
fi
echo "✅ - Production env"

if ! [[ `git diff-tree --name-only HEAD | grep "src"` ]] ; then
  echo "🛑 - Build cancelled - No changes in src"
  exit 0;
fi
echo "✅ - Changes in src"

exit 1;