/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供测试页面
 * [POS]: pages/ 的测试页面，用于排查问题
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">测试页面</h1>
        <p className="text-xl">如果你能看到这个，说明路由正常工作</p>
      </div>
    </div>
  )
}
