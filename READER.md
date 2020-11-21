1. 关联远程与本地仓库
  1.1. 在git 设置身份名字肯邮箱
  1.2. 生成SSH公钥
  1.3. 将公钥复制到远程仓库设置项里的部署公钥
2. git init 初始化本地仓库 
3. git commit -m 'first commit' 提交项目 
4. git remote add origin https://xxx.com/xx/xxx  关联远程仓库 - 添加源 
5. git push -u origin master  提交 

# 打tag
1. git add . 将工作空间的所有变化添加到暂存区
2. git commit -m 'xxx' 提交暂存区中的代码
3. git tag xxxx  打tag
4. git tags  查看tag
5. git log  查看提交记录
6. git reset 部分版本号 、 git reset --hard 部分版本号  回退、强制回退到某版本
7. 按照前6步骤继续打tag...