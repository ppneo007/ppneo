# ppneo
夏日北冰洋的CSDN博客

关于文件状态
  一般仓库中的文件可能存在于这4种状态：
 1）Untracked files                     → 文件未被跟踪（A）
 2）Untracked but not Change   → 已跟踪，但是未修改（B）
 3）Changes but not updated     → 已跟踪，文件被修改，但并没有添加到暂存区（C）
 4）Changes to be committed    → 已跟踪，文件被修改，已添加到暂存区，这是下次提交的内容（D）

常用GIT命令
1. git clone  （B）
说明：将代码克隆到本地（本地：当前控制台进入的目录）

2. git add   （A->D）
git add <filePath/folderPath>  说明：将指定新文件添加到本地暂存区（可以是一个文件，也可以是一个文件夹下面的所有文件）
git add .                                    说明：将所有的新文件提交暂存区
git add --all                              说明：将所有的新文件提交暂存区

3.  git reset HEAD <filePath/folderPath> （D->A）
说明：将新添加的文件撤出暂存区

4. git commit  （C->D）
git commit <filePath/folderPath>  说明： 将指定文件修改提交到本地暂存区（可以是一个文件，也可以是一个文件夹下面的所有文件）
git commit -a                                  说明：将所有修改过的工作文件提交暂存区git 

5. git log
说明：查看commit提交日志(每次提交会生成唯一的commit_ID)
6. git reset
git reset  --soft  commit_ID       说明：将当前工作区恢复到commit_ID指示的那次状态， 工作区代码的修改保留  （D->C）
git reset  --hard commit_ID    说明：将当前工作区恢复到commit_ID指示的那次状态， 工作区代码的修改同时被强制回退到修改之前的状态  （D->B）

7. git push  （D->B）
git push                                 说明：将提交到暂存区的修改推送到远程仓库
git push -u origin master   说明：clone到本地后的初次提交

8. git pull  （B->B）
说明：将远程仓库更新到本地

9. git diff  <filePath/folderPath>
说明：比较当前文件和暂存区文件差异（一个文件或者文件夹下面的所有文件）

10. git status
说明：扫描当前工作区的所有改动，包括文件的增加、删除、修改

11. git checkout 
git checkout <filePath/folderPath>  说明：撤销本地修改（可以是一个文件，也可以是一个文件夹下面的所有文件）
git checkout -f                                  说明：撤销本地所有修改


关于冲突
大部分代码冲突是以下情况产生： 本地代码未更新到远程仓库的最新状态， 然后本地修改之后进行pull操作， 如果远程仓库的代码和本地修改代码部分有重叠部分，这部分就会产生冲突。

这时把本地修改commit提交之后，进行pull操作

查看冲突文件如下：

<<<<<  和  >>>>>>>之间的就是冲突代码， "==========="之上的是本地的修改， "==========="之下的是远程仓库的最新代码
然后根据实际情况，合并本地的修改和远程仓库的修改， 然后再进行commit操作即可。


关于文件的跟踪设置
如果我们希望项目目录下面的某些文件的增删改不被跟踪（即不进入远程仓库），尤其是是编译生成的中间文件和目标文件，需要在.gitignore中进行设置，
可以忽略某个文件夹，也可以忽略某个后缀的一类文件。如果项目跟目录下没有该文件（.gitignore是个隐藏文件），则可以手动创建： 以.gitignore为文件名的一个文本文件。
例如：


