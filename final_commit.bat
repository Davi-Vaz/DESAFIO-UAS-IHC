@echo off
REM Script simples para fazer o commit final

setlocal enabledelayedexpansion

cd /d "c:\Users\Davi\Downloads\Ua1\DESAFIO UAS IHC"

echo Repositorio local: %cd%
echo.

echo === Adicionando arquivos modificados ===
"C:\Program Files\Git\cmd\git.exe" add .

echo.
echo === Fazendo commit ===
"C:\Program Files\Git\cmd\git.exe" commit -m "Update all files with personal information (Davi Vaz Moraes, 22407051) and refactor code"

echo.
echo === Log de commits ===
"C:\Program Files\Git\cmd\git.exe" log --oneline -3

echo.
echo === Arquivos rastreados ===
"C:\Program Files\Git\cmd\git.exe" ls-files | find /c /v ""

echo.
echo Repositorio pronto para fazer push!
echo Proxima etapa: git push -u origin main
echo.

timeout /t 5 /nobreak
