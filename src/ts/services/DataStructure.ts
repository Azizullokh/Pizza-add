export class DataStructure<T> {
  constructor(private endpoint: string) {}

  async loadAll(): Promise<T[]> {
    const req = await fetch(this.endpoint);
    return req.json();
  }

  async loadOne(id: number) {
    const req = await fetch(`${this.endpoint}/` + id);
    return req.json();
  }

  async delete(id: string) {
    const req = await fetch(`${this.endpoint}/` + id, {
      method: "DELETE",
    });
  }

  async save(data: T) {
    const req = await fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.ok) {
        window.location.href = './'
       }
        if (req.ok) {
        alert('success')
        }
    
  }
}
