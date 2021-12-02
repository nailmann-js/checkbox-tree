<template>
  <el-tree
  :data="listToTree"
  show-checkbox
  node-key="id"
  highlight-current
  :props="defaultProps">
  </el-tree>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { UserRights, ModUserRights } from '@/@types/user-right'

export default class extends Vue {
  defaultProps = {
    children: 'children',
    label: 'name'
  }

  data: UserRights[] = [
    {
      id: 1,
      parentId: 0,
      name: 'Редактировать пользователя',
      checked: true
    },
    {
      id: 2,
      parentId: 1,
      name: 'Удалить профиль пользователя',
      checked: true
    },
    {
      id: 3,
      parentId: 1,
      name: 'Забанить пользователя',
      checked: true
    },
    {
      id: 4,
      parentId: 2,
      name: 'Клонировать пользователя',
      checked: true
    },
    {
      id: 5,
      parentId: 2,
      name: 'Создать пользователя',
      checked: true
    }
  ]

  get listToTree (): ModUserRights[] {
    const list: ModUserRights[] = this.data.map((item) => {
      return { ...item, children: [] }
    })
    const map: { [key: string]: number } = {}
    let node: ModUserRights
    const roots: ModUserRights[] = []
    for (let i = 0; i < list.length; i += 1) {
      map[list[i].id] = i
    }
    for (let i = 0; i < list.length; i += 1) {
      node = list[i]
      if (node.parentId !== 0) {
        list[map[node.parentId]].children.push(node)
      } else {
        roots.push(node)
      }
    }
    return roots
  }
}

</script>

<style lang="scss">
$--font-path: "~element-ui/lib/theme-chalk/fonts";
@import "~element-ui/packages/theme-chalk/src/index";
</style>
