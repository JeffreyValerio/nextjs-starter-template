export const Footer = () => {
  return (
    <footer>
      <div className="py-20 border-t">
        <div className="max-width">
          <div className="grid grid-cols-4">
            <div className="">COL 1</div>
            <div className="">COL 2</div>
            <div className="">COL 3</div>
            <div className="">COL 4</div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs h-10 flex items-center justify-center border-t">
        <p>
          Copyright &copy; 2024 <u className="font-bold">COMPANY</u> Todos
          los derechos reservados
        </p>
      </div>
    </footer>
  );
};
