function animate () {

    return 'time' + 'time';

    return 'time'
}

// data-structures/tree/binary-tree-node.js
import Comparator from '../../utils/comparator'
import HashTable from '../hash-table'

export default class BinaryTreeNode {
  constructor(value = null) {
    // Значение
    this.value = value
    // Левый потомок
    this.left = null
    // Правый потомок
    this.right = null
    // Предок
    this.parent = null

    // Дополнительная информация об узле
    this.meta = new HashTable()

    // Функция сравнения узлов
    this.nodeComparator = new Comparator()
  }

}