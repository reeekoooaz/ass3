/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gui;

import java.util.logging.Level;
import java.util.logging.Logger;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author LENOVO
 */
public class SnapshotTest {

//    public SnapshotTest() {
//    }
//
//    @BeforeClass
//    public static void setUpClass() {
//
//    }
//
//    @AfterClass
//    public static void tearDownClass() {
//    }
//
//    @Before
//    public void setUp() {
//    }
//
//    @After
//    public void tearDown() {
//    }

//    /**
//     * Test of takeAPic method, of class Snapshot.
//     */
//    @Test
//    public void testTakeAPic() {
//        System.out.println("takeAPic");
//        Snapshot instance;
//        try {
//            instance = new Snapshot();
//            instance.setVisible(true);
//            instance.takeAPic();
//        } catch (InterruptedException ex) {
//            fail("Exception");
//        }
//        // TODO review the generated test code and remove the default call to fail.
//        //fail("The test case is a prototype.");
//
//    }

//    /**
//     * Test of main method, of class Snapshot.
//     */
//    @Test
//    public void testMain() throws Exception {
//        System.out.println("main");
//        String[] args = null;
//        Snapshot.main(args);
//        // TODO review the generated test code and remove the default call to fail.
//        //fail("The test case is a prototype.");
//    }
    
    @Test
    public void test1Plus1Equal2() {
        assertTrue((1 + 1) == 4);
    }
    
    @Test
    public void testNameofFile() {
        String name = Snapshot.getFileName();
        assertTrue(name.contains("12-4"));
       
    }

}
