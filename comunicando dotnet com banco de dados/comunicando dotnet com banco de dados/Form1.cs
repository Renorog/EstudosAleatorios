using MySql.Data.MySqlClient;
using MySql.Data.Types;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace comunicando_dotnet_com_banco_de_dados
{
    public partial class Form1 : Form {
        public Form1() {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e) {
            if (Conectar()) {
                MessageBox.Show("Conexão bem sucedida!");
            }
        }

        private bool Conectar() {
            var result = false;

            try {
                using (var cn = new MySqlConnection(Conn.strConn)) {
                    cn.Open();
                    result = true;
                }
            }

            catch (Exception ex) {
                result = false;
                MessageBox.Show("Falha: " + ex.Message);
            }

            return result;

        }
    


        private void Form1_Load(object sender, EventArgs e) {

        }
    }
}
