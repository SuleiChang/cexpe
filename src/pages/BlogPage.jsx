import { useParams } from "react-router-dom";

function BlogPage() {
  const { param } = useParams();

  return (
    <div>
      <h2 className="text-3xl font-semibold">Blog</h2>
      {!param || /^\d+$/.test(param) ? (
        param ? (
          <p className="text-green-500">
            Parámetros correctos:{" "}
            <span className="text-green-500 font-bold">{param}</span>
          </p>
        ) : null
      ) : (
        <p className="text-red-500 font-semibold">
          Parámetros en la ruta inválidos
        </p>
      )}
    </div>
  );
}

export default BlogPage;
