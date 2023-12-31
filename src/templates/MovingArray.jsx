import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const MovingArray = () => {

  const { register, handleSubmit, reset, control } = useForm({
    // input の value の 初期値を設置
    defaultValues: {
      title: '',
      tasks: [{ taskValue: "", taskValue2:"" }]
    }
  });

  // input を動的に増減させるための設定
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks"
  });

  // submitボタンを押した時に行う処理
  const onSubmit = (data) => {
    const list = [];
    data.tasks.forEach((item, index) => {
      if (item.taskValue !== '') {
        list.push(item)
      }
    })
    console.log(list)
    console.log(data.title)
    
    // 送信後 input の入力欄を初期化
    reset();
  };

  // input をいくつ追加したカウント
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);

  // input を減らすボタンを押した時の処理
  const reduce = () => {
    if (count > 0) {
      remove(count);
      setCount(count - 1);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          placeholder="Title"
        />

        {fields.map((field, index) => (
          <div key={field.id}>
            <label htmlFor={`tasks.${index}.taskValue`}>
              タスク番号{index}：
              <input {...register(`tasks.${index}.taskValue`)} />
            </label>
          </div>
        ))}

        <button
          type="button"
          onClick={() => [append({ taskValue: "", taskValue2: "" }), countUp()]}
        >
          後ろに追加
        </button>
        <br />

        <button type="button" onClick={reduce}>
          減らす
        </button>
        <br />

        <button type="submit">送信</button>
      </form>
    </>
  );
};

export default MovingArray;