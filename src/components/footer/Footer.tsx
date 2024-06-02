import Link from "next/link";
import { Logo } from "../shared/Logo";

export const Footer = () => {
  return (
    <footer>
      <div className="py-10 border-t">
        <div className="max-width">
          <div className="grid gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="">
              <Logo color="text-primary" />
              <p className="w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis ratione sit nostrum culpa corporis, fugiat laudantium
              </p>
            </div>
            <div className="">
              <h3 className="font-bold text-2xl mb-2">Information</h3>
              <nav>
                <ul className="grid gap-y-2">
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Link one</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Link two</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Link three</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Link four</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="">
              <h3 className="font-bold text-2xl mb-2">Services</h3>
              <nav>
                <ul className="grid gap-y-2">
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Service one</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Service two</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Service three</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Service four</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="">
              <h3 className="font-bold text-2xl mb-2">Customer service</h3>
              <nav>
                <ul className="grid gap-y-2">
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Política de privacidad</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Términos &amp; condiciones</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Política de cookies</Link>
                  </li>
                  <li className="font-light hover:underline">
                    <Link href={"/"}>Política de devoluciones</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs h-10 flex items-center justify-center border-t">
        <p>
          Copyright &copy; 2024 <u className="font-bold">COMPANY</u> Todos los
          derechos reservados
        </p>
      </div>
    </footer>
  );
};
