// describe("Create a new task", () => {
//     beforeEach(() => {
//         cy.visit("/");
//     });

// });

// describe('TodoItem', () => {
//     it('is not in edit mode by default', () => {
//         const todo = { id: 1, title: 'Buy milk', completed: false };
//         const component = ReactTestUtils.renderIntoDocument(React.createElement(app.TodoItem, { todo: todo }));
//         expect(component.state.editText).toEqual('Buy milk');
//         expect(component.props.editing).toBeFalsy();
//     });
// });

// describe("Filters by completed tasks", () => {
//     beforeEach(() => {
//         cy.visit("/");
//     });
//     it("displays only completed tasks when filter is applied", () => {
//         cy.get(".new-todo").type("dusting{enter}");

//         cy.get(".filters a").contains("Completed").click();

//         cy.get(".todo-list li").should("have.length", 1);
//         cy.get(".todo-list li").should("have.class", "completed");
//     });
// });


describe("Testing E2E", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("has a header", () => {
        cy.get("header").should("exist");
    });

    it("section with title", () => {
        cy.get("section").should("have.text", "todos");
    });
    it("shows todo list", () => {
        cy.get(".todo-list").should("exist");
    });

    // it("button works", () => {
    //     cy.get(".destroy").click();
    //     // cy.get(".todo-list li").first().find(".destroy").click();


    // });
    it("test delete button", () => {
        cy.get(".new-todo").type("Test delete todo{enter}");
        cy.get(".destroy").click();
        cy.get(".todo-list li").should("not.exist");
    });


});