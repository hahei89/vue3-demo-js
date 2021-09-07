function handleCollapse(state, data) {
  state.collapse = data
}

function addTag(state, tag) {
  // 已存在，则不做任何操作
  if (state.tagsList.findIndex((item) => item.path === tag.path) > -1) {
    return
  }
  state.tagsList.push(tag)
}

function removeTag(state, tag) {
  // 已存在且不是首页
  const tagIndex = state.tagsList.findIndex((item) => item.path === tag.path)
  if (tagIndex > -1 && tag.path !== '/') {
    state.tagsList.splice(tagIndex, 1)
  }
}

export default {
  handleCollapse,
  addTag,
  removeTag
}