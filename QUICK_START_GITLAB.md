# Quick Start: Push to GitLab

## Your GitLab Deploy Key (Public Key)

**Copy this key and add it to GitLab:**

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPdGt1GIGR6s2nVnbIZ2s/s0DRik/XzkQ+6H0/WJLYVS gitlab-deploy-key
```

## Steps to Push to GitLab

### 1. Add Deploy Key to GitLab

1. Go to: `https://gitlab.com/[your-username]/[your-repo]`
2. Navigate to: **Settings** → **Repository** → **Deploy Keys**
3. Click **Add key**
4. Paste the public key above
5. Check **"Write repository"** (if you need push access)
6. Click **Add key**

### 2. Configure SSH (One-time setup)

Add this to `~/.ssh/config`:

```bash
nano ~/.ssh/config
```

Add:
```
Host gitlab.com
  HostName gitlab.com
  User git
  IdentityFile ~/.ssh/gitlab_deploy_key
  IdentitiesOnly yes
```

Save and exit (Ctrl+X, then Y, then Enter)

### 3. Add GitLab Remote

Replace `[your-username]` and `[your-repo]` with your actual GitLab project:

```bash
git remote add gitlab git@gitlab.com:[your-username]/[your-repo].git
```

**Example:**
```bash
git remote add gitlab git@gitlab.com:saint-daniels/saint-daniels-healthcare-rewards.git
```

### 4. Test Connection

```bash
ssh-add ~/.ssh/gitlab_deploy_key
ssh -T git@gitlab.com
```

You should see: `Welcome to GitLab, @username!`

### 5. Push to GitLab

```bash
# Push main branch
git push gitlab main

# Or push all branches
git push gitlab --all
```

## Alternative: Use the Script

```bash
# Edit the script first to add your GitLab URL, then:
./push-to-gitlab.sh
```

## Files Created

- ✅ `README.md` - Project documentation
- ✅ `.gitlab-ci.yml` - CI/CD pipeline configuration
- ✅ `GITLAB_SETUP.md` - Detailed setup instructions
- ✅ `push-to-gitlab.sh` - Automated push script
- ✅ `QUICK_START_GITLAB.md` - This file

## Need Help?

See `GITLAB_SETUP.md` for detailed troubleshooting.

