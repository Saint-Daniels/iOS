#!/bin/bash

# GitLab Push Script
# This script helps you push your code to GitLab

echo "🚀 GitLab Push Setup"
echo "===================="
echo ""

# Check if GitLab remote exists
if git remote | grep -q "gitlab"; then
    echo "✅ GitLab remote already exists"
    git remote -v | grep gitlab
else
    echo "⚠️  GitLab remote not found"
    echo ""
    echo "Please add your GitLab remote first:"
    echo "  git remote add gitlab git@gitlab.com:[your-username]/[your-repo].git"
    echo ""
    echo "Or edit this script and replace [your-username] and [your-repo]"
    exit 1
fi

echo ""
echo "📋 Current remotes:"
git remote -v

echo ""
echo "🔑 Adding SSH key to agent..."
ssh-add ~/.ssh/gitlab_deploy_key 2>/dev/null || echo "Key already added or not needed"

echo ""
echo "🧪 Testing GitLab connection..."
ssh -T git@gitlab.com 2>&1 | head -1

echo ""
read -p "Do you want to push to GitLab now? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "📤 Pushing to GitLab..."
    git push gitlab main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Successfully pushed to GitLab!"
    else
        echo ""
        echo "❌ Push failed. Check the error above."
        echo ""
        echo "Common issues:"
        echo "  1. Make sure deploy key is added to GitLab"
        echo "  2. Check SSH config: ~/.ssh/config"
        echo "  3. Verify repository URL is correct"
    fi
else
    echo "Push cancelled."
fi

