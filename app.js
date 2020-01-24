//此处写明git部分运用知识
/*
  1.   git add .
  2.   git commit -m '此处写明标记名称'
  3.   git tag 标记名称
    例如：
    git add .
    git commit -m '知识点1'
    git tag 01_知识点1

    做完以上操作后，执行如下命令
  4.   git tag
    此时可以查看所添加的标记
  5.   git log
    该命令可以查看所有提交过的git日志
    并且可以显示每个提交版本的hash码

    此时需要进行回退，回退方式为：
  6.   git reset 哈希码（可以是部分哈希码）
    如果执行该命令时出现以下提示：
      Unstaged changes after reset:
      M        文件目录 + 文件名
    说明有代码在提交以后进行过修改，修改内容并未提交
    此时用以下命令可以进行强制回退
  7.   git reset --hard 哈希码（可以是部分哈希码）

    回退完成后，如果小程序编辑器中的文件出现了“M”字样，则执行如下命令即可
  8.   git status
*/