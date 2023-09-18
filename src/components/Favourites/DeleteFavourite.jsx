export default function DeleteButton({ id, callback }) {
    const handleDelete = async () => {
      const decision = window.confirm("Are you sure?");
  
      if (!decision) {
        return;
      }
  
      const url = `http://localhost:3000/api/holidays/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      await response.json();
      callback(id);
    };
  
    return <button onClick={handleDelete}>Delete</button>;
  }