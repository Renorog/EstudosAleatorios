using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudComMysql {
    static class Conn { // a classe está como static para evitar que seja instanciada

        private const string servidor = "localhost";
        private const string bancoDados = "livros";
        private const string usuario = "root";
        private const string senha = "sua_senha";


        static public string strConn = $"server={servidor}; User Id={usuario}; database={bancoDados}" +
            $"password={senha}";
    }
}


