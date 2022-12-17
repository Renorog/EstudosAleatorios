using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace comunicando_dotnet_com_banco_de_dados {

    static class Conn { // o uso so static é para que a classe não possa ser instanciada
        static private string servidor = "localhost";
        static private string bancoDados = "world";
        static private string usuario = "root";
        static private string senha = "123777";

        static public string strConn = $"server={servidor}; User Id={usuario};" +
            $"database={bancoDados} password={senha}";
    }
}
