var STORAGE_KEY = 'todos-vuekr-demo';
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )

    todos.forEach(function (todo, index) {
      todo.id = index
    })

    todoStorage.uid = todos.length;
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}

const app = new Vue({
  el: '#app',
  data: {
    // 사용할 데이터
    todos: [],
    options: [
      { value: -1, label: '전체' },
      { value: 0, label: '작업 중' },
      { value: -1, label: '완료' },
    ],
    current: -1
  },
  created() {
    this.todos = todoStorage.fetch();
  },
  computed: {
    computedTodos: function() {
      // 데이터 current가 -1이라면 전체 출력
      // 이 이외의 경우에는 current와 state의 상태를 기반으로 필터링
      return this.todos.filter(function(el) {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },
    labels() {
      return this.options.reduce(function(a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
    }
  },
  methods: {
    // 사용할 메서드
    doAdd: function (event, value) {
      console.log(this.todos);
      // ref로 이름이 붙여 있는 요소를 참조합니다.
      var comment = this.$refs.comment.value;
      // validate
      if (!comment.length) {
        return;
      }

      this.todos.push({
        id: todoStorage.uid++,
        comment: comment,
        state: 0
      })

      this.$refs.comment.value = '';
      console.log(this.todos);
    },
    doChangeState: function (item) {
      item.state = item.state ? 0 : 1
    },
    doRemove: function (item) {
      var index = this.todos.indexOf(item);
      this.todos.splice(index, 1);
      console.log(this.todos);
    }
  },
  watch: {
    //옵션을 사용하는 경우, 객체 형식으로 지정한다.
    todos: {
      //  매개 변수로는 속성의 변경 후 값이 들어옵니다.
      handler: function (todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  }
})

