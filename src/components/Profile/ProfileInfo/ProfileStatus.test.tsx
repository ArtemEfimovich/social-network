import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", ()=>{
    test("status from props should be in the state", () => {
        const component=create(<ProfileStatus status={'it-incubator'} updateStatus={()=>{}} /> )
        const instance =component.getInstance()
        // @ts-ignore
        expect(instance.state.status).toBe('it-incubator')
    })
    test("after creation span with status should be displayed with correct status ", () => {
        const component=create(<ProfileStatus status={'it-incubator'} updateStatus={()=>{}} /> )
        const root =component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation input shouldn't be displayed ", () => {
        const component=create(<ProfileStatus status={'it-incubator'} updateStatus={()=>{}} /> )
        const root =component.root
        expect(()=>{
            let input = root.findByType("input")
        }).toThrow()
    })
    test("after creation span  should contains correct status ", () => {
        const component=create(<ProfileStatus status={'it-incubator'} updateStatus={()=>{}} /> )
        const root =component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe('it-incubator')
    })
    test("input should be displayed in editMode instead of span ", () => {
        const component=create(<ProfileStatus status={'it-incubator'} updateStatus={()=>{}} /> )
        const root =component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe('it-incubator')
    })
    test("callback should be called ", () => {
        const mockCallback = jest.fn()
        const component=create(<ProfileStatus status={'it-incubator'} updateStatus={mockCallback} /> )
        const instance =component.getInstance()
        // @ts-ignore
        instance.deActivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})