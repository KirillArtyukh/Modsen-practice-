"use strict";

function testScope() {
    // ���������� ���������� � �������������� var
    if (true) {
        var xVar = "var variable";
        console.log("Inside block (var):", xVar); // �������� ������ �����
    }
    console.log("Outside block (var):", xVar); // �������� ��� �����

    // ���������� ���������� � �������������� let
    if (true) {
        let xLet = "let variable";
        console.log("Inside block (let):", xLet); // �������� ������ �����
    }
    try {
        console.log("Outside block (let):", xLet); // ���������� ��� �����
    } catch (e) {
        console.log("Outside block (let): Error -", e.message);
    }

    // ���������� ���������� � �������������� const
    if (true) {
        const xConst = "const variable";
        console.log("Inside block (const):", xConst); // �������� ������ �����
    }
    try {
        console.log("Outside block (const):", xConst); // ���������� ��� �����
    } catch (e) {
        console.log("Outside block (const): Error -", e.message);
    }
}

// ����� ������� ��� ������������ ������� ���������
testScope();
