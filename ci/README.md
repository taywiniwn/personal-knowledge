# CI 模板

将本目录的 `build.yml` 复制为仓库内的 `.github/workflows/build.yml` 后推送即可启用构建流水线。

若使用 GitHub OAuth / fine-grained token 推送，需要具备 `workflow` 权限，否则 GitHub 会拒绝创建或更新 `.github/workflows/` 下的文件。
