const Home = ({changeValue, addPets, name, age,
  especies, owner,email, result, formRef }) => {
  return (
    <>
      <h1>Mascotas</h1>
      <form ref={formRef}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" ref={name} name="name" id="name" onChange={changeValue} />
        </div>
        <div>
          <label htmlFor="age">age</label>
          <input type="text" ref={age} name="age" id="age" onChange={changeValue} />
        </div>
        <div>
          <label htmlFor="especies">especies</label>
          <input type="text" ref={especies} name="especies" id="especies" onChange={changeValue} />
        </div>
        <div>
          <label htmlFor="owner">owner</label>
          <input type="text" ref={owner} name="owner" id="owner" onChange={changeValue} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" ref={email} name="email" id="email" onChange={changeValue} />
        </div>
        <input type={'button'} onClick={addPets} value="añadir"/>
      </form>
      <ul type="none" ref={result}></ul>
    </>
  )
}
export default Home
