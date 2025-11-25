# GitLab Setup Instructions

## Step 1: Add Deploy Key to GitLab

1. Copy the public key below:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPdGt1GIGR6s2nVnbIZ2s/s0DRik/XzkQ+6H0/WJLYVS gitlab-deploy-key
```

2. Go to your GitLab project: `https://gitlab.com/[your-username]/[your-repo]`
3. Navigate to: **Settings** → **Repository** → **Deploy Keys**
4. Click **Add key**
5. Paste the public key
6. Check **"Write repository"** if you need push access
7. Click **Add key**

## Step 2: Add GitLab Remote

Run these commands in your terminal:

```bash
# Add GitLab as a remote (replace with your GitLab repo URL)
git remote add gitlab git@gitlab.com:[your-username]/[your-repo].git

# Or if using HTTPS:
# git remote add gitlab https://gitlab.com/[your-username]/[your-repo].git

# Verify remotes
git remote -v
```

## Step 3: Configure SSH for GitLab

Add this to your `~/.ssh/config` file:

```
Host gitlab.com
  HostName gitlab.com
  User git
  IdentityFile ~/.ssh/gitlab_deploy_key
  IdentitiesOnly yes
```

## Step 4: Push to GitLab

```bash
# Push main branch to GitLab
git push gitlab main

# Or push all branches
git push gitlab --all

# Push tags
git push gitlab --tags
```

## Step 5: Set GitLab as Default (Optional)

If you want GitLab to be your primary remote:

```bash
# Remove origin (GitHub) if desired
# git remote remove origin

# Rename gitlab to origin
git remote rename gitlab origin
```

## Troubleshooting

If you get permission errors:

1. Make sure the deploy key is added to GitLab
2. Check that the SSH key is loaded: `ssh-add ~/.ssh/gitlab_deploy_key`
3. Test connection: `ssh -T git@gitlab.com`
4. Verify SSH config is correct

