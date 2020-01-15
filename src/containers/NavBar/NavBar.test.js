import React from "react";
import { shallow } from "enzyme";
import { NavBar, mapStateToProps, mapDispatchToProps } from "./NavBar";
import {
  loadError,
  loadLoading,
  loadBlush,
  loadBronzer,
  loadEyebrow,
  loadEyeliner,
  loadEyeshadow,
  loadFoundation,
  loadLipliner,
  loadLipstick,
  loadMascara
} from "../../actions";
import { fetchMakeup } from "../../apiCalls";
import { dataCleanup } from "../../dataCleaner";

jest.mock("../../apiCalls");

jest.mock("../../dataCleaner");
fetchMakeup.mockImplementation(() => ({
  id: 2,
  product_type: "blush"
}));
dataCleanup.mockImplementation(() => ({
  id: 2,
  product_type: "blush"
}));

describe("NavBar", () => {
  let wrapper, initialState;

  let mockLoadLoading = jest.fn();
  let mockLoadBlush = jest.fn();
  let mockLoadBronzer = jest.fn();
  let mockLoadEyeliner = jest.fn();
  let mockLoadEyeshadow = jest.fn();
  let mockLoadFoundation = jest.fn();
  let mockLoadLipstick = jest.fn();
  let mockLoadMascara = jest.fn();
  let mockLoadEyebrow = jest.fn();
  let mockLoadLipliner = jest.fn();

  beforeEach(() => {
    initialState = {
      blush: [],
      bronzer: [],
      eyebrow: [],
      eyeliner: [],
      eyeshadow: [],
      foundation: [],
      lip_liner: [],
      lipstick: [],
      mascara: [],
      loading: false,
      error: ""
    };

    let mockBlush = [];
    let mockBronzer = [];
    let mockEyeliner = [];
    let mockLipstick = [];
    let mockLipliner = [];
    let mockMascara = [];
    let mockFoundation = [];
    let mockEyeshadow = [];
    let mockEyebrow = [];

    wrapper = shallow(
      <NavBar
        initialState={initialState}
        blush={mockBlush}
        bronzer={mockBronzer}
        eyeliner={mockEyeliner}
        eyeshadow={mockEyeshadow}
        foundation={mockFoundation}
        lip_liner={mockLipliner}
        lipstick={mockLipstick}
        mascara={mockMascara}
        eyebrow={mockEyebrow}
        loadLoading={mockLoadLoading}
        loadBlush={mockLoadBlush}
        loadBronzer={mockLoadBronzer}
        loadEyeliner={mockLoadEyeliner}
        loadEyeshadow={mockLoadEyeshadow}
        loadFoundation={mockLoadFoundation}
        loadLipstick={mockLoadLipstick}
        loadMascara={mockLoadMascara}
        loadEyebrow={mockLoadEyebrow}
        loadLipliner={mockLoadLipliner}
        loading={false}
      />
    );
    let mockProduct = { id: 1 };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProduct)
      }); 
    });
  });

  it("should match the snapshots", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //pickBlush

  //FIRST PART OF THE IF STATEMENT >>>> blush=[]
  //test that loadLoading is fired with the value of true
  //mock fetch???
  //test that dataCleanup was invoked with products as parameter
  //test that loadBlush was invoked with cleanProducts as parameter
  //test that loadLoading is fired with the value of false

  //SECOND PART OF THE IF STATEMENT >>>> blush=[{id: 1}, { id: 2}]
  //test that loadBlush was invoked with blush

  it("should call loadLoading with a value of true, if the store is empty", async () => {
    const mockEvent = {
      target: {
        name: "blush"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("blush");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 2,
      product_type: "blush"
    });
    expect(mockLoadBlush).toHaveBeenCalledWith({
      id: 2,
      product_type: "blush"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  it("should call loadBlush, if the store is not empty", async () => {
    let mockBlush = [{ id: 1, product_type: "blush" }];

    initialState = {
      blush: [{ id: 1, product_type: "blush" }],
      bronzer: [],
      eyebrow: [],
      eyeliner: [],
      eyeshadow: [],
      foundation: [],
      lip_liner: [],
      lipstick: [],
      mascara: [],
      loading: false,
      error: ""
    };

    wrapper = shallow(
      <NavBar
        initialState={initialState}
        blush={mockBlush}
        loadLoading={mockLoadLoading}
        loadBlush={mockLoadBlush}
        loading={false}
      />
    );

    expect(mockLoadBlush).toHaveBeenCalledWith({
      id: 2,
      product_type: "blush"
    });
  });

  //BRONZER

  it("should call loadLoading with a value of true, if the store is empty", async () => {
    fetchMakeup.mockImplementation(() => ({
      id: 1,
      product_type: "bronzer"
    }));
    dataCleanup.mockImplementation(() => ({
      id: 1,
      product_type: "bronzer"
    }));

    const mockEvent = {
      target: {
        name: "bronzer"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("bronzer");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 1,
      product_type: "bronzer"
    });
    expect(mockLoadBronzer).toHaveBeenCalledWith({
      id: 1,
      product_type: "bronzer"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  it("should call loadBronzer, if the store is not empty", async () => {
    let mockBronzer = [{ id: 1, product_type: "bronzer" }];

    initialState = {
      bronzer: [{ id: 1, product_type: "bronzer" }],
      eyebrow: [],
      eyeliner: [],
      eyeshadow: [],
      foundation: [],
      lip_liner: [],
      lipstick: [],
      mascara: [],
      loading: false,
      error: ""
    };

    wrapper = shallow(
      <NavBar
        initialState={initialState}
        bronzer={mockBronzer}
        loadLoading={mockLoadLoading}
        loadBronzer={mockLoadBronzer}
        loading={false}
      />
    );

    expect(mockLoadBronzer).toHaveBeenCalledWith({
      id: 1,
      product_type: "bronzer"
    });
  });

  // EYELINER

  it("should call loadLoading with a value of true, if the store is empty", async () => {
    fetchMakeup.mockImplementation(() => ({
      id: 3,
      product_type: "eyeliner"
    }));
    dataCleanup.mockImplementation(() => ({
      id: 3,
      product_type: "eyeliner"
    }));

    const mockEvent = {
      target: {
        name: "eyeliner"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("eyeliner");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 3,
      product_type: "eyeliner"
    });
    expect(mockLoadEyeliner).toHaveBeenCalledWith({
      id: 3,
      product_type: "eyeliner"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  //EYESHADOW

  it("should call loadLoading with a value of true, if the store is empty", async () => {
    fetchMakeup.mockImplementation(() => ({
      id: 4,
      product_type: "eyeshadow"
    }));
    dataCleanup.mockImplementation(() => ({
      id: 4,
      product_type: "eyeshadow"
    }));

    const mockEvent = {
      target: {
        name: "eyeshadow"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("eyeshadow");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 4,
      product_type: "eyeshadow"
    });
    expect(mockLoadEyeshadow).toHaveBeenCalledWith({
      id: 4,
      product_type: "eyeshadow"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  //FOUNDATION
  it("should call loadLoading with a value of true, if the store is empty", async () => {
    fetchMakeup.mockImplementation(() => ({
      id: 5,
      product_type: "foundation"
    }));
    dataCleanup.mockImplementation(() => ({
      id: 5,
      product_type: "foundation"
    }));

    const mockEvent = {
      target: {
        name: "foundation"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("foundation");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 5,
      product_type: "foundation"
    });
    expect(mockLoadFoundation).toHaveBeenCalledWith({
      id: 5,
      product_type: "foundation"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  //LIP LINER
  it("should call loadLoading with a value of true, if the store is empty", async () => {
    fetchMakeup.mockImplementation(() => ({
      id: 6,
      product_type: "lip_liner"
    }));
    dataCleanup.mockImplementation(() => ({
      id: 6,
      product_type: "lip_liner"
    }));

    const mockEvent = {
      target: {
        name: "lip_liner"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("lip_liner");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 6,
      product_type: "lip_liner"
    });
    expect(mockLoadLipliner).toHaveBeenCalledWith({
      id: 6,
      product_type: "lip_liner"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  //LIPSTICK
  it("should call loadLoading with a value of true, if the store is empty", async () => {
    fetchMakeup.mockImplementation(() => ({
      id: 7,
      product_type: "lipstick"
    }));
    dataCleanup.mockImplementation(() => ({
      id: 7,
      product_type: "lipstick"
    }));

    const mockEvent = {
      target: {
        name: "lipstick"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("lipstick");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 7,
      product_type: "lipstick"
    });
    expect(mockLoadLipstick).toHaveBeenCalledWith({
      id: 7,
      product_type: "lipstick"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  //MASCARA
  it("should call loadLoading with a value of true, if the store is empty", async () => {
    fetchMakeup.mockImplementation(() => ({
      id: 8,
      product_type: "mascara"
    }));
    dataCleanup.mockImplementation(() => ({
      id: 8,
      product_type: "mascara"
    }));

    const mockEvent = {
      target: {
        name: "mascara"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("mascara");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 8,
      product_type: "mascara"
    });
    expect(mockLoadMascara).toHaveBeenCalledWith({
      id: 8,
      product_type: "mascara"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  //EYEBROW
  it("should call loadLoading with a value of true, if the store is empty", async () => {
    fetchMakeup.mockImplementation(() => ({
      id: 9,
      product_type: "eyebrow"
    }));
    dataCleanup.mockImplementation(() => ({
      id: 9,
      product_type: "eyebrow"
    }));

    const mockEvent = {
      target: {
        name: "eyebrow"
      }
    };
    await wrapper.instance().pickProduct(mockEvent);

    expect(mockLoadLoading).toHaveBeenCalledWith(true);
    expect(fetchMakeup).toHaveBeenCalledWith("eyebrow");
    expect(dataCleanup).toHaveBeenCalledWith({
      id: 9,
      product_type: "eyebrow"
    });
    expect(mockLoadEyebrow).toHaveBeenCalledWith({
      id: 9,
      product_type: "eyebrow"
    });
    expect(mockLoadLoading).toHaveBeenCalledWith(false);
  });

  describe("mapStateToProps", () => {
    let initialState = {
      blush: [],
      bronzer: [],
      eyebrow: [],
      eyeliner: [],
      eyeshadow: [],
      foundation: [],
      lip_liner: [],
      lipstick: [],
      mascara: [],
      loading: false,
      error: ""
    };

    it("should return arrays of all products", () => {
      let mappedProps = mapStateToProps(initialState);

      expect(mappedProps).toEqual(initialState);
    });
  });

  describe("mapDispatchToProps", () => {
    let initialState = {
      blush: [],
      bronzer: [],
      eyebrow: [],
      eyeliner: [],
      eyeshadow: [],
      foundation: [],
      lip_liner: [],
      lipstick: [],
      mascara: [],
      loading: false,
      error: ""
    };

    it("calls dispatch with a loadBlush action when loadBlush is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadBlush(initialState.blush);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadBlush(initialState.blush);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadBronzer action when loadBronzer is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadBronzer(initialState.bronzer);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadBronzer(initialState.bronzer);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadEyebrow action when loadEyebrow is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadEyebrow(initialState.eyebrow);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadEyebrow(initialState.eyebrow);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadEyeliner action when loadEyeliner is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadEyeliner(initialState.eyeliner);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadEyeliner(initialState.eyeliner);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadEyeshadow action when loadEyeshadow is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadEyeshadow(initialState.eyeshadow);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadEyeshadow(initialState.eyeshadow);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadFoundation action when loadFoundation is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadFoundation(initialState.foundation);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadFoundation(initialState.foundation);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadLipliner action when loadLipliner is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadLipliner(initialState.lipliner);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadLipliner(initialState.lipliner);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadLipstick action when loadLipstick is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadLipstick(initialState.lipstick);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadLipstick(initialState.lipstick);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadMascara action when loadMascara is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadMascara(initialState.mascara);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadMascara(initialState.mascara);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadLoading action when loadLoading is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadLoading(initialState.loading);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadLoading(initialState.loading);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it("calls dispatch with a loadError action when loadError is called", () => {
      const mockDispatch = jest.fn();
      const mockAction = loadError(initialState.error);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadError(initialState.error);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
